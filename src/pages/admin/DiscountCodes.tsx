import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Plus, 
  Download, 
  Trash2, 
  Edit, 
  TrendingUp, 
  Code, 
  LogOut,
  Loader2,
  RefreshCw
} from "lucide-react";
import { useAdmin } from "@/hooks/useAdmin";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DiscountCode {
  id: string;
  code: string;
  type: 'percentage' | 'fixed_amount';
  value: number;
  description: string;
  max_uses: number | null;
  current_uses: number;
  min_purchase_amount: number;
  valid_from: string;
  valid_until: string | null;
  is_active: boolean;
  created_at: string;
}

const DiscountCodes = () => {
  const { isAdmin, isLoading: authLoading, user, signOut } = useAdmin();
  const navigate = useNavigate();
  const [codes, setCodes] = useState<DiscountCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active: 0, totalUsage: 0, totalDiscount: 0 });
  
  // New code form
  const [isCreating, setIsCreating] = useState(false);
  const [newCode, setNewCode] = useState({
    code: '',
    type: 'percentage' as 'percentage' | 'fixed_amount',
    value: 10,
    description: '',
    max_uses: null as number | null,
    min_purchase_amount: 0,
    valid_days: 30
  });

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      loadData();
    }
  }, [isAdmin]);

  const loadData = async () => {
    try {
      // Load discount codes
      const { data: codesData, error: codesError } = await supabase
        .from('discount_codes')
        .select('*')
        .order('created_at', { ascending: false });

      if (codesError) throw codesError;
      setCodes((codesData as DiscountCode[]) || []);

      // Load usage stats
      const { data: usageData, error: usageError } = await supabase
        .from('discount_code_usage')
        .select('discount_amount');

      if (usageError) throw usageError;

      const totalDiscount = usageData?.reduce((sum, u) => sum + Number(u.discount_amount), 0) || 0;
      const activeCount = codesData?.filter(c => c.is_active).length || 0;
      const totalUsage = codesData?.reduce((sum, c) => sum + c.current_uses, 0) || 0;

      setStats({
        total: codesData?.length || 0,
        active: activeCount,
        totalUsage,
        totalDiscount
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error loading data:', error);
      }
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const generateCode = () => {
    const prefix = 'WAVELY';
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    setNewCode({ ...newCode, code: `${prefix}${randomPart}` });
  };

  const createCode = async () => {
    if (!newCode.code || newCode.value <= 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsCreating(true);
    try {
      const { error } = await supabase
        .from('discount_codes')
        .insert({
          code: newCode.code.toUpperCase(),
          type: newCode.type,
          value: newCode.value,
          description: newCode.description,
          max_uses: newCode.max_uses,
          min_purchase_amount: newCode.min_purchase_amount,
          valid_until: new Date(Date.now() + newCode.valid_days * 24 * 60 * 60 * 1000).toISOString()
        });

      if (error) throw error;

      toast.success("Discount code created!");
      setNewCode({
        code: '',
        type: 'percentage',
        value: 10,
        description: '',
        max_uses: null,
        min_purchase_amount: 0,
        valid_days: 30
      });
      loadData();
    } catch (error: any) {
      if (import.meta.env.DEV) {
        console.error('Error creating code:', error);
      }
      toast.error(error.message || "Failed to create code");
    } finally {
      setIsCreating(false);
    }
  };

  const toggleCodeStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('discount_codes')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      toast.success(currentStatus ? "Code deactivated" : "Code activated");
      loadData();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error toggling code:', error);
      }
      toast.error("Failed to update code");
    }
  };

  const deleteCode = async (id: string) => {
    if (!confirm("Are you sure you want to delete this code?")) return;

    try {
      const { error } = await supabase
        .from('discount_codes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success("Code deleted");
      loadData();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error deleting code:', error);
      }
      toast.error("Failed to delete code");
    }
  };

  const deactivateExpired = async () => {
    try {
      const { error } = await supabase
        .from('discount_codes')
        .update({ is_active: false })
        .lt('valid_until', new Date().toISOString())
        .eq('is_active', true);

      if (error) throw error;
      toast.success("Expired codes deactivated");
      loadData();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error deactivating expired:', error);
      }
      toast.error("Failed to deactivate codes");
    }
  };

  const exportReport = () => {
    const csv = [
      ['Code', 'Type', 'Value', 'Uses', 'Max Uses', 'Status', 'Created', 'Expires'].join(','),
      ...codes.map(c => [
        c.code,
        c.type,
        c.value,
        c.current_uses,
        c.max_uses || 'Unlimited',
        c.is_active ? 'Active' : 'Inactive',
        new Date(c.created_at).toLocaleDateString(),
        c.valid_until ? new Date(c.valid_until).toLocaleDateString() : 'Never'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `discount-codes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success("Report exported!");
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-poppins">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Discount Codes Management</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user?.email}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Codes</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <Code className="h-8 w-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Codes</p>
                <p className="text-3xl font-bold text-green-600">{stats.active}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Usage</p>
                <p className="text-3xl font-bold">{stats.totalUsage}</p>
              </div>
              <RefreshCw className="h-8 w-8 text-blue-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Discount</p>
                <p className="text-3xl font-bold">${stats.totalDiscount.toFixed(2)}</p>
              </div>
              <Download className="h-8 w-8 text-orange-600" />
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-accent">
                <Plus className="h-4 w-4 mr-2" />
                Create New Code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Discount Code</DialogTitle>
                <DialogDescription>
                  Generate a new discount code for campaigns
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Code (e.g., SUMMER20)"
                    value={newCode.code}
                    onChange={(e) => setNewCode({ ...newCode, code: e.target.value.toUpperCase() })}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={generateCode}>
                    Generate
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Type</label>
                    <Select
                      value={newCode.type}
                      onValueChange={(v: any) => setNewCode({ ...newCode, type: v })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="fixed_amount">Fixed Amount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Value</label>
                    <Input
                      type="number"
                      value={newCode.value}
                      onChange={(e) => setNewCode({ ...newCode, value: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Input
                    placeholder="Campaign description"
                    value={newCode.description}
                    onChange={(e) => setNewCode({ ...newCode, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Max Uses (optional)</label>
                    <Input
                      type="number"
                      placeholder="Unlimited"
                      value={newCode.max_uses || ''}
                      onChange={(e) => setNewCode({ ...newCode, max_uses: e.target.value ? Number(e.target.value) : null })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Min Purchase</label>
                    <Input
                      type="number"
                      value={newCode.min_purchase_amount}
                      onChange={(e) => setNewCode({ ...newCode, min_purchase_amount: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Valid for (days)</label>
                  <Input
                    type="number"
                    value={newCode.valid_days}
                    onChange={(e) => setNewCode({ ...newCode, valid_days: Number(e.target.value) })}
                  />
                </div>

                <Button
                  onClick={createCode}
                  disabled={isCreating}
                  className="w-full bg-gradient-accent"
                >
                  {isCreating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Create Code"
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" onClick={deactivateExpired}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Deactivate Expired
          </Button>

          <Button variant="outline" onClick={exportReport}>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>

          <Button variant="outline" onClick={loadData}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Min Purchase</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {codes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell className="font-mono font-bold">{code.code}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {code.type === 'percentage' ? `${code.value}%` : `$${code.value}`}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {code.type === 'percentage' ? `${code.value}%` : `${code.value} RON`}
                  </TableCell>
                  <TableCell>
                    {code.current_uses} / {code.max_uses || '∞'}
                  </TableCell>
                  <TableCell>${code.min_purchase_amount}</TableCell>
                  <TableCell>
                    {code.valid_until 
                      ? new Date(code.valid_until).toLocaleDateString()
                      : 'Never'}
                  </TableCell>
                  <TableCell>
                    <Badge variant={code.is_active ? "default" : "secondary"}>
                      {code.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleCodeStatus(code.id, code.is_active)}
                      >
                        {code.is_active ? 'Deactivate' : 'Activate'}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteCode(code.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
};

export default DiscountCodes;

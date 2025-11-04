import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock, Loader2 } from "lucide-react";
import { useAdmin } from "@/hooks/useAdmin";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAdmin();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      await signIn(email, password);
      toast.success("Logged in successfully!");
      navigate("/admin/discount-codes");
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error("Login failed", {
        description: error.message || "Invalid credentials or no admin access"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold font-poppins">Admin Login</h1>
          <p className="text-muted-foreground">
            Access the Wavely admin dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="admin@wavely.ro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-accent hover:shadow-glow transition-premium"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Sign In
              </>
            )}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>Admin access only</p>
          <a href="/" className="text-primary hover:underline">
            ← Back to Homepage
          </a>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;

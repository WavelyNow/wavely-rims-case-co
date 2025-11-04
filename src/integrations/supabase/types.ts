export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      discount_code_usage: {
        Row: {
          customer_email: string
          discount_amount: number
          discount_code_id: string
          id: string
          order_id: string | null
          used_at: string
        }
        Insert: {
          customer_email: string
          discount_amount: number
          discount_code_id: string
          id?: string
          order_id?: string | null
          used_at?: string
        }
        Update: {
          customer_email?: string
          discount_amount?: number
          discount_code_id?: string
          id?: string
          order_id?: string | null
          used_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "discount_code_usage_discount_code_id_fkey"
            columns: ["discount_code_id"]
            isOneToOne: false
            referencedRelation: "discount_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      discount_codes: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          current_uses: number
          description: string | null
          id: string
          is_active: boolean
          max_uses: number | null
          min_purchase_amount: number | null
          type: string
          updated_at: string
          valid_from: string
          valid_until: string | null
          value: number
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          current_uses?: number
          description?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          min_purchase_amount?: number | null
          type: string
          updated_at?: string
          valid_from?: string
          valid_until?: string | null
          value: number
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          current_uses?: number
          description?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          min_purchase_amount?: number | null
          type?: string
          updated_at?: string
          valid_from?: string
          valid_until?: string | null
          value?: number
        }
        Relationships: []
      }
      giveaway_entries: {
        Row: {
          created_at: string
          email: string
          entry_count: number
          full_name: string
          giveaway_id: string
          id: string
          referral_code: string | null
          social_proof: string | null
        }
        Insert: {
          created_at?: string
          email: string
          entry_count?: number
          full_name: string
          giveaway_id: string
          id?: string
          referral_code?: string | null
          social_proof?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          entry_count?: number
          full_name?: string
          giveaway_id?: string
          id?: string
          referral_code?: string | null
          social_proof?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "giveaway_entries_giveaway_id_fkey"
            columns: ["giveaway_id"]
            isOneToOne: false
            referencedRelation: "giveaways"
            referencedColumns: ["id"]
          },
        ]
      }
      giveaways: {
        Row: {
          created_at: string
          current_entries: number
          description: string | null
          end_date: string
          entry_requirement: string
          id: string
          is_active: boolean
          max_entries: number | null
          prize_description: string
          start_date: string
          title: string
          updated_at: string
          winner_email: string | null
          winner_selected: boolean
        }
        Insert: {
          created_at?: string
          current_entries?: number
          description?: string | null
          end_date: string
          entry_requirement: string
          id?: string
          is_active?: boolean
          max_entries?: number | null
          prize_description: string
          start_date?: string
          title: string
          updated_at?: string
          winner_email?: string | null
          winner_selected?: boolean
        }
        Update: {
          created_at?: string
          current_entries?: number
          description?: string | null
          end_date?: string
          entry_requirement?: string
          id?: string
          is_active?: boolean
          max_entries?: number | null
          prize_description?: string
          start_date?: string
          title?: string
          updated_at?: string
          winner_email?: string | null
          winner_selected?: boolean
        }
        Relationships: []
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          current_uses: number
          expires_at: string | null
          id: string
          is_active: boolean
          max_uses: number | null
          referrer_email: string
          referrer_name: string | null
          referrer_reward_type: string
          referrer_reward_value: number
          reward_type: string
          reward_value: number
        }
        Insert: {
          code: string
          created_at?: string
          current_uses?: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          referrer_email: string
          referrer_name?: string | null
          referrer_reward_type: string
          referrer_reward_value: number
          reward_type: string
          reward_value: number
        }
        Update: {
          code?: string
          created_at?: string
          current_uses?: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          referrer_email?: string
          referrer_name?: string | null
          referrer_reward_type?: string
          referrer_reward_value?: number
          reward_type?: string
          reward_value?: number
        }
        Relationships: []
      }
      referral_usage: {
        Row: {
          id: string
          order_id: string | null
          referee_email: string
          referee_name: string | null
          referral_code_id: string
          referrer_reward_claimed: boolean
          reward_claimed: boolean
          used_at: string
        }
        Insert: {
          id?: string
          order_id?: string | null
          referee_email: string
          referee_name?: string | null
          referral_code_id: string
          referrer_reward_claimed?: boolean
          reward_claimed?: boolean
          used_at?: string
        }
        Update: {
          id?: string
          order_id?: string | null
          referee_email?: string
          referee_name?: string | null
          referral_code_id?: string
          referrer_reward_claimed?: boolean
          reward_claimed?: boolean
          used_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_usage_referral_code_id_fkey"
            columns: ["referral_code_id"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const

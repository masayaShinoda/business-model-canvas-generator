export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      section: {
        Row: {
          created_at: string
          id: number
          questions: string[] | null
          questions_kh: string[] | null
          title: string
          title_kh: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          questions?: string[] | null
          questions_kh?: string[] | null
          title: string
          title_kh?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          questions?: string[] | null
          questions_kh?: string[] | null
          title?: string
          title_kh?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

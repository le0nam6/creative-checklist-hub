export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "Revisão criativa": {
        Row: {
          "Account Manager": string | null
          "Adequação ao Público-Alvo": string | null
          Arquivo: string | null
          Auditoria: string | null
          "Call to Action (CTA)": string | null
          Categoria: string | null
          "Categoria de Refacao": string | null
          "Clareza e Objetividade": string | null
          "Clareza Visual e Hierarquia": string | null
          Cliente: string | null
          Complexidade: string | null
          "Consistência Visual": string | null
          Data: string | null
          "Data Fim Revisao": string | null
          "Data Inicio": string | null
          "Defesa Estrategica": string | null
          "Diagramação & Alinhamento": string | null
          "Estrutura e Formatação": string | null
          "Feedback (Adeq)": string | null
          "Feedback (Clar)": string | null
          "Feedback (Clareza)": string | null
          "Feedback (Cons)": string | null
          "Feedback (CTA)": string | null
          "Feedback (Diag)": string | null
          "Feedback (Estr)": string | null
          "Feedback (Gat)": string | null
          "Feedback (OBJ)": string | null
          "Feedback (Oferta)": string | null
          "Feedback (Orto)": string | null
          "Feedback (QV)": string | null
          "Feedback (Resp)": string | null
          "Feedback (Seg)": string | null
          "Gatilhos Mentais e Urgência": string | null
          ID: string
          "Link do ClickUp": string | null
          "Link do Drive": string | null
          "Motivo da Refacao": string | null
          "Objetivo Claro e Alinhado com a Estratégia": string | null
          "Oferta Relevante": string | null
          "Ortografia e Gramática": string | null
          "Qualidade Visual": string | null
          Quantidade: number | null
          Responsavel: string | null
          "Responsividade e Legibilidade": string | null
          "Segmentação e Personalização": string | null
          Status: string | null
          "Tipo de Criativo": string | null
          Video: string | null
        }
        Insert: {
          "Account Manager"?: string | null
          "Adequação ao Público-Alvo"?: string | null
          Arquivo?: string | null
          Auditoria?: string | null
          "Call to Action (CTA)"?: string | null
          Categoria?: string | null
          "Categoria de Refacao"?: string | null
          "Clareza e Objetividade"?: string | null
          "Clareza Visual e Hierarquia"?: string | null
          Cliente?: string | null
          Complexidade?: string | null
          "Consistência Visual"?: string | null
          Data?: string | null
          "Data Fim Revisao"?: string | null
          "Data Inicio"?: string | null
          "Defesa Estrategica"?: string | null
          "Diagramação & Alinhamento"?: string | null
          "Estrutura e Formatação"?: string | null
          "Feedback (Adeq)"?: string | null
          "Feedback (Clar)"?: string | null
          "Feedback (Clareza)"?: string | null
          "Feedback (Cons)"?: string | null
          "Feedback (CTA)"?: string | null
          "Feedback (Diag)"?: string | null
          "Feedback (Estr)"?: string | null
          "Feedback (Gat)"?: string | null
          "Feedback (OBJ)"?: string | null
          "Feedback (Oferta)"?: string | null
          "Feedback (Orto)"?: string | null
          "Feedback (QV)"?: string | null
          "Feedback (Resp)"?: string | null
          "Feedback (Seg)"?: string | null
          "Gatilhos Mentais e Urgência"?: string | null
          ID: string
          "Link do ClickUp"?: string | null
          "Link do Drive"?: string | null
          "Motivo da Refacao"?: string | null
          "Objetivo Claro e Alinhado com a Estratégia"?: string | null
          "Oferta Relevante"?: string | null
          "Ortografia e Gramática"?: string | null
          "Qualidade Visual"?: string | null
          Quantidade?: number | null
          Responsavel?: string | null
          "Responsividade e Legibilidade"?: string | null
          "Segmentação e Personalização"?: string | null
          Status?: string | null
          "Tipo de Criativo"?: string | null
          Video?: string | null
        }
        Update: {
          "Account Manager"?: string | null
          "Adequação ao Público-Alvo"?: string | null
          Arquivo?: string | null
          Auditoria?: string | null
          "Call to Action (CTA)"?: string | null
          Categoria?: string | null
          "Categoria de Refacao"?: string | null
          "Clareza e Objetividade"?: string | null
          "Clareza Visual e Hierarquia"?: string | null
          Cliente?: string | null
          Complexidade?: string | null
          "Consistência Visual"?: string | null
          Data?: string | null
          "Data Fim Revisao"?: string | null
          "Data Inicio"?: string | null
          "Defesa Estrategica"?: string | null
          "Diagramação & Alinhamento"?: string | null
          "Estrutura e Formatação"?: string | null
          "Feedback (Adeq)"?: string | null
          "Feedback (Clar)"?: string | null
          "Feedback (Clareza)"?: string | null
          "Feedback (Cons)"?: string | null
          "Feedback (CTA)"?: string | null
          "Feedback (Diag)"?: string | null
          "Feedback (Estr)"?: string | null
          "Feedback (Gat)"?: string | null
          "Feedback (OBJ)"?: string | null
          "Feedback (Oferta)"?: string | null
          "Feedback (Orto)"?: string | null
          "Feedback (QV)"?: string | null
          "Feedback (Resp)"?: string | null
          "Feedback (Seg)"?: string | null
          "Gatilhos Mentais e Urgência"?: string | null
          ID?: string
          "Link do ClickUp"?: string | null
          "Link do Drive"?: string | null
          "Motivo da Refacao"?: string | null
          "Objetivo Claro e Alinhado com a Estratégia"?: string | null
          "Oferta Relevante"?: string | null
          "Ortografia e Gramática"?: string | null
          "Qualidade Visual"?: string | null
          Quantidade?: number | null
          Responsavel?: string | null
          "Responsividade e Legibilidade"?: string | null
          "Segmentação e Personalização"?: string | null
          Status?: string | null
          "Tipo de Criativo"?: string | null
          Video?: string | null
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

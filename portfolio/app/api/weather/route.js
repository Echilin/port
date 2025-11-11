export async function GET() {
  // Dados fixos de exemplo
  return new Response(
    JSON.stringify({
      cidade: "Recife",
      temperatura: 28,
      descricao: "céu limpo"
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

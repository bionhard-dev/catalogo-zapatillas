export async function onRequest(context) {
  return new Response(
    "Proxy activo correctamente",
    {
      status: 200,
      headers: {
        "Content-Type":"text/plain"
      }
    }
  );
}

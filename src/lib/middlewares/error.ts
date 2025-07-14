export const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ error: "Unknown error" }), {
    status: 500,
  });
};

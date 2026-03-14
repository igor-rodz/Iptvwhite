export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const sigmaApiUrl = 'https://alpha-server-oficial.sigma.st/api/chatbot/OALyeP0L4w/8241Kg1mxd';
    
    // We send a generic message to trigger the test generation
    // Sigma Chatbot APIs usually expect a "msg" or "message" field
    const response = await fetch(sigmaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        msg: 'quero um teste', // Generic message to trigger chatbot logic
        sender: 'Visitante_Site',
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error generating test:', error);
    return new Response(JSON.stringify({ error: 'Falha ao gerar teste automático.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

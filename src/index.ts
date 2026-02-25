export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/dataset") {
      const data = await (await fetch(new URL("/dataset.json", request.url))).json();
      return Response.json(data);
    }
    if (url.pathname === "/api/sources") {
      const data = await (await fetch(new URL("/sources.json", request.url))).json();
      return Response.json(data);
    }
    return (await fetch(request)) as Response;
  },
};

class WebSocketService {
  private socket: WebSocket | null = null;

  public connect(
    url: string,
    onMessage: (payload: any) => void,
    pl?: string
  ): void {
    const payload =
      pl ??
      JSON.stringify({
        method: "SUBSCRIBE",
        params: ["!ticker@arr"],
        id: 1,
      });
    this.socket = new WebSocket(url);

    if (this.socket) {
      this.socket.onopen = () => {
        console.log("Connected to WebSocket");
        this.socket?.send(payload);
      };

      this.socket.onmessage = (event) => {
        if (typeof event.data === "string") {
          const payload = JSON.parse(event.data);
          payload?.data && onMessage(payload.data);
        }
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      this.socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
    }
  }

  public close(): void {
    const payload = JSON.stringify({
      method: "UNSUBSCRIBE",
      params: ["!ticker@arr"],
      id: 312,
    });
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(payload);
      this.socket.close();
    }
    this.socket = null;
  }
}

export default WebSocketService;

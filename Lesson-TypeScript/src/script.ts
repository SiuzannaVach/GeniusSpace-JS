document.getElementById("generate")?.addEventListener("click", async () => {
  const status = document.getElementById("status");
  if (!status) return;

  status.textContent = "Loading...";

  try {
    const quoteUrl = "https://dummyjson" + ".com/quotes/random";
    const response = await fetch(quoteUrl);
    const data = await response.json();

    const post = document.getElementById("post") as HTMLInputElement;

    if (post) post.value = data.quote;
    status.textContent = "Success";
  } catch (e: any) {
    status.textContent = "Error fetching quote";
    if (e instanceof Error) {
      console.error("Error fetching quote", e.message);
    }
  }
});

document.getElementById("save")?.addEventListener("click", async () => {
  const post = document.getElementById("post") as HTMLInputElement;
  const postContent = post.value;
  const status = document.getElementById("status");
  if (!status) return;

  if (!postContent) {
    status.textContent = "No post to save";
    return;
  }

  status.textContent = "Saving post...";
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    post.value = "";
    status.textContent = "Post saved!";
    return;
  } catch (e: any) {
    status.textContent = "Error saving post";
    console.error("Error saving post", e.message);
    return;
  }
});

function connect() {
  const wsUrl = "wss://api.whitebit" + ".com/ws";
  const socket = new WebSocket(wsUrl);

  const currencyStatus = document.getElementById("currency_status");

  if (currencyStatus) {
    currencyStatus.textContent = "🟡 Connecting...";
    currencyStatus.className = "connecting";
  }

  socket.onopen = () => {
    console.log("Connected to Whitebit API");

    if (currencyStatus) {
      currencyStatus.textContent = "🟢 Connected";
      currencyStatus.className = "connected";
    }

    const message = {
      id: 1,
      method: "depth_subscribe",
      params: ["BTC_USDT", 1, "0"],
    };

    socket.send(JSON.stringify(message));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.method === "depth_update") {
      const price = data.params?.[1]?.bids?.[0]?.[0];
      const priceElem = document.getElementById("price");
      const trendElem = document.getElementById("trend");

      if (price && priceElem && trendElem) {
        const priceDiff =
          parseFloat((priceElem.textContent ?? "").substring(1)) - price;

        const trend = priceDiff > 0 ? "↑" : "↓";
        const trendStyle = priceDiff > 0 ? "connected" : "disconnected";

        trendElem.textContent = trend;
        trendElem.className = trendStyle;

        priceElem.textContent = `$${price}`;
      }
    }
  };
  socket.onclose = (event) => {
    console.log("Disconnected from Whitebit API", event);
    if (currencyStatus) {
      currencyStatus.textContent = "🔴 Disconnected";
      currencyStatus.className = "disconnected";
    }
    setTimeout(() => connect(), 3000);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    if (currencyStatus) {
      currencyStatus.textContent = "🔴 Disconnected";
      currencyStatus.className = "disconnected";
    }
  };
}
connect();

import Navbar from "@/ui/Navbar/Navbar";

export default function Custom404() {
  return (
    <div id="not-found">
      <Navbar />
      <div style={{ textAlign: "center", marginBlock: "56px" }}>
        <h1>Pagina inesistente</h1>
      </div>
    </div>
  );
}
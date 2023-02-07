import "./App.css";
import Button from "./Components/button";
function App() {
  const SecStyle = { display: "flex", gap: "1rem" };
  return (
    <div>
      {/* default */}
      <section style={SecStyle}>
        <Button />
        <Button hover />
      </section>
      {/* variant--outline */}
      <section style={SecStyle}>
        <Button variant={"outline"} />
        <Button variant={"outline"} hover />
      </section>
      {/* variant--text */}
      <section style={SecStyle}>
        <Button variant={"text"} />
        <Button variant={"text"} hover />
      </section>
      {/* disable shadow */}
      <section>
        <Button disableShadow />
      </section>
      {/* disabled + text */}
      <section style={SecStyle}>
        <Button disabled />
        <Button variant={"text"} disabled />
      </section>
      {/* icons button */}
      <section style={SecStyle}>
        <Button size={"sm"} />
        <Button size={"md"} />
        <Button size={"lg"} />
      </section>
      {/* colored button */}
      <div>
        {/* normal state */}
        <section style={SecStyle}>
          <Button />
          <Button color={"primary"} dataValue="primary" />
          <Button color={"secondary"} dataValue="secondary" />
          <Button color={"danger"} dataValue="danger" />
        </section>
        {/* hover state state */}
        <section style={SecStyle}>
          <Button hover />
          <Button color={"primary"} hover dataValue={"primary"} />
          <Button color={"secondary"} hover dataValue={"secondary"} />
          <Button color={"danger"} hover dataValue={"danger"} />
        </section>
      </div>
    </div>
  );
}

export default App;

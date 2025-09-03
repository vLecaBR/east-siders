import React, { useState } from "react";
import { FormWrap, Field, TextArea, Submit } from "./styles";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // solução sem backend: abrir mailto com conteúdo
    const to = "seuemail@exemplo.com"; // substitua
    const subject = `Contato via site - ${name || "Sem nome"}`;
    const body = `Nome: ${name}\nTelefone: ${phone}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <FormWrap id="contact" onSubmit={handleSubmit}>
      <Field>
        <label>Nome</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
      </Field>
      <Field>
        <label>Telefone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} />
      </Field>
      <Field>
        <label>Mensagem</label>
        <TextArea value={message} onChange={e => setMessage(e.target.value)} rows="6" required />
      </Field>
      <Submit type="submit">Enviar mensagem</Submit>
    </FormWrap>
  );
}

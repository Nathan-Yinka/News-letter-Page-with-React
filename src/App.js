import Home from "./pages/Home";
import Submit from "./pages/Submit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
function App() {
  const [items, setItems]= useState([
    {
        id: 1,
        text: 'Product discovery and building what matters',
        checked : true
    },
    {
        id: 2,
        text: 'Measuring to ensure updates are a success',
        checked : true
    },
    {
        id: 3,
        text: 'And much more!',
        checked : true
    }
]);
    const [mail, setMail] = useState('')
    const [err, setError] = useState("mt-2")
    const [err2, setError2] = useState('font-weight-bold label-error')


    if ('Users-mails' in localStorage) {} else {
      localStorage.setItem('Users-mails', JSON.stringify([]));
    }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home 
        mail={mail}
        setMail={setMail}
        err={err}
        setError={setError}
        err2={err2}
        setError2={setError2}
        items={items}
        setItems={setItems}
        />} />
        <Route path="/submit" element={<Submit mail={mail} setMail={setMail}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;

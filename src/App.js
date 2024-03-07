import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";

function App() {
  let signobj = SignatureComponent | null;

  const onSave = () => {
    signobj?.save();
  }
  const onClear = () => {
    signobj?.clear();
  }

  function clickEventHandler() {
    let signature = getComponent(document.getElementById('signature'), 'signature');
    let color = document.getElementById('text').value;
    signature.strokeColor = color;
}

const changeBackgroundColor = () => {
  let signature = getComponent(document.getElementById('signature'), 'signature');
  let color = document.getElementById('text1').value;
  signature.backgroundColor = color;
};
  return (
    <div id='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f2f2f2' }}>
      <div id="signature-base-control" style={{ background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Signature App</h2>
        <div id="input" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            id="text"
            placeholder="Enter the Stroke Color Value"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',
              width: '200px',
              outline: 'none',
            }}
          />

          <ButtonComponent onClick={clickEventHandler} isPrimary={true} style={{ borderRadius: '5px', padding: '10px', background: '#4CAF50', color: '#fff', cursor: 'pointer', border: 'none', outline: 'none' }}>Set Stroke Color</ButtonComponent>

         
          <input
            type="text"
            id="text1"
            placeholder="Enter the BackGround Color"
            style={{
              padding: '10px',
              borderRadius: '5px',
              marginTop:'10px',
              border: '1px solid #ccc',
              marginBottom: '10px',
              width: '200px',
              outline: 'none',
            }}
          />
          <ButtonComponent onClick={changeBackgroundColor} isPrimary={true} style={{ borderRadius: '5px', padding: '10px', background: '#4CAF50', color: '#fff', cursor: 'pointer', border: 'none', outline: 'none' }}>Set Stroke Color</ButtonComponent>
        </div>
        <div id="signature-control" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SignatureComponent
            id='signature'
            ref={sign => signobj = sign}
            height={300}
            width={500}
            style={{ border: '1px solid #ddd', borderRadius: '10px' }}
          />
        </div>
        

        <div id='actionBtn' style={{ display: 'flex', alignItems: 'center' }}>
          <ButtonComponent onClick={onSave} style={{ borderRadius: '5px', padding: '10px', marginRight: '10px', background: '#007BFF', color: '#fff', cursor: 'pointer', border: 'none', outline: 'none' }}>Save</ButtonComponent>
          <ButtonComponent onClick={onClear} style={{ borderRadius: '5px', padding: '10px', background: '#DC3545', color: '#fff', cursor: 'pointer', border: 'none', outline: 'none' }}>Clear</ButtonComponent>
        </div>
      </div>
    </div>
  );
}

export default App;

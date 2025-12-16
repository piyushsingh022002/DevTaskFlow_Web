import React, { useState } from 'react';

const DemoForm: React.FC = () => {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
  });
console.log(formValue);
  return (
    <>
      <input type="text" value={formValue.firstName} onChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} />
      <input type="text" value={formValue.firstName} onChange={(e) => setFormValue({ ...formValue, firstName: e.target.value })} />
    </>
  );
};

export default DemoForm;

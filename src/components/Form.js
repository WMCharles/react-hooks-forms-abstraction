import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({firstName: "Charles", lastName: "Wafula", admin: false})
  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    setFormData({
      ...formData,
      [name]: value
    });
  }
  function handleCheckBox(event){
    setFormData(
      {...formData,
      admin: event.target.checked}
    )
  }
  console.log(formData.admin)
  return (
    <form>
      <input type="text" name = "name" onChange={handleChange} value={formData.firstName} />
      <input type="text" name = "name" onChange={handleChange} value={formData.lastName} />
      <label htmlFor="checkbox">Admin?</label>
      <input type="checkbox" onChange={handleCheckBox} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import React from "react";
import "./Siparis.css";
import * as Yup from "yup";
import { useState } from "react";

const formSchema = Yup.object().shape({
  Malzeme: Yup.array().min(4, "En az 4 malzeme seçin").max(10, "En çok 10 malzeme seçin"),
});

const Check = () => {
  const [formData, setFormData] = useState({ Malzeme: [] });
  const [errors, setErrors] = useState({ Malzeme: "" });

  const checkFormErrors = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors((errors) => ({
          ...errors,
          [name]: "",
        }));
      })
      .catch((err) => {
        setErrors((errors) => ({
          ...errors,
          [name]: err.errors[0],
        }));
      });
  };

  function handleChange(event) {
    const { value, type, name } = event.target;

    if (type === "checkbox") {
      let yeniMalzemelr;
      if (formData.Malzeme.includes(value)) {
        yeniMalzemelr = formData.Malzeme.filter((m) => m !== value);
      } else {
        yeniMalzemelr = [...formData.Malzeme, value];
      }
      checkFormErrors(name, yeniMalzemelr);
      setFormData({
        ...formData,
        [name]: yeniMalzemelr,
      });
    } else {
      checkFormErrors(name, value);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }
    return (
      
<form >
  <h2>Ek Malzemeler</h2>
  <p>En Fazla 10 malzeme seçebilirsiniz. 5 TL </p>
  <div className="allfive">

  <div className="firstfive">
  <input  onChange={handleChange} type="checkbox" id="food1" name="Malzeme" value="Pepperoni" checked={formData.Malzeme.includes("Pepperoni")}></input>
  <label  htmlFor="food1">Pepperoni</label>
  <br></br>
  
  <input onChange={handleChange} type="checkbox" id="food2" name="Malzeme" value="Sosis"  checked={formData.Malzeme.includes("Sosis")}></input>
  <label htmlFor ="food2"> Sosis</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Kanada jambonu" checked={formData.Malzeme.includes("Kanada jambonu")}></input>
  <label htmlFor ="vehicle3"> Kanada jambonu</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Tavuk Izgara" checked={formData.Malzeme.includes("Tavuk Izgara")}></input>
  <label htmlFor ="vehicle3"> Tavuk Izgara</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Soğan" checked={formData.Malzeme.includes("Soğan")}></input>
  <label htmlFor ="vehicle3"> Soğan</label>
  <br></br>
  </div>
  <div className="secondfive">
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Domates" checked={formData.Malzeme.includes("Domates")}></input>
  <label htmlFor ="vehicle3"> Domates</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Mısır" checked={formData.Malzeme.includes("Mısır")}></input>
  <label htmlFor ="vehicle3"> Mısır</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Salam" checked={formData.Malzeme.includes("Salam")}></input>
  <label htmlFor ="vehicle3"> Salam</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Jalepeno" checked={formData.Malzeme.includes("Jalepeno")}></input>
  <label htmlFor ="vehicle3"> Jalepeno</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Sarımsak" checked={formData.Malzeme.includes("Sarımsak")}></input>
  <label htmlFor ="vehicle3"> Sarımsak</label>
  <br></br>
  </div>
  <div className="last-five">
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Biber" checked={formData.Malzeme.includes("Biber")}></input>
  <label htmlFor ="vehicle3"> Biber</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Sucuk"checked={formData.Malzeme.includes("Sucuk")}></input>
  <label htmlFor ="vehicle3"> Sucuk</label>
  <br></br>
  <input onChange={handleChange} type="checkbox" id="vehicle3" name="Malzeme" value="Ananas" checked={formData.Malzeme.includes("Ananas")}></input>
  <label htmlFor ="vehicle3"> Ananas</label>
  <br></br>
  <input onChange={handleChange}  type="checkbox" id="vehicle3" name="Malzeme" value="Kabak" checked={formData.Malzeme.includes("Kabak")}></input>
  <label htmlFor ="vehicle3"> Kabak</label>
  <br></br>
  <br></br>
  {errors.Malzeme !== "" && (
            <div className="field-error">{errors.Malzeme}</div>
          )}
  </div>

  </div>


</form>

    );
}
export default Check;


const Contact = () => {
const handleOnSubmit = (formData) => {
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
};

  return (
<div className='section-contact'>
<h2>Contact Us</h2>
<form action={handleOnSubmit}>
<div className="username"><input type="text" required autoComplete='off' placeholder='Enter Your Name' name='username'/>
</div>
<div className="gmail"><input type="email" required autoComplete='off' placeholder='Enter gmail' name='gmail'/>
</div>
<div className="textarea"><input className="textbtn" type="text" required autoComplete='off' placeholder='Enter Your Message' name='username'/>
</div>
  

  <button> Send</button>



</form>
</div>
  )
}

export default Contact
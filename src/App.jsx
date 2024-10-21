
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import ReuseAbleForm from './components/ReusableForm/ReuseAbleForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'

function App() {

  const signUpSubmit = data => {
   console.log(data);
  }

  const profileUpdateSubmit = data => {
   console.log(data)

  }


  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseAbleForm formTile={'Sign Up'} handleSubmit={signUpSubmit}>
      <div><h3>Please sign up your account</h3></div>
      </ReuseAbleForm>
      <ReuseAbleForm formTile={'Profile Update'} submitBtn='Update' handleSubmit={profileUpdateSubmit}>
      <div><h3>please update your profile</h3></div>
      </ReuseAbleForm>
    </>
  )
}

export default App

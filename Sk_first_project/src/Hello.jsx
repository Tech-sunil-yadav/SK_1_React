function Hello() {
    let myName = 'sunil';
    let fullName = () =>{
        return 'Sunil Yadav';
    }
   return <p>
     Hii there I am {myName}  <br></br>
     Hii there I am {fullName()}
   </p>
}
export default Hello;
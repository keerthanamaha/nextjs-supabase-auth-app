const Footer =()=>{
    return(
        <>
         <footer className="  text-center py-3 mt-5"
         style={{backgroundColor:"#343a40",color:"#fff"}}
         >
            <p className="mb-0">
                
                 &copy; {new Date().getFullYear()}SupaNext. All rights Reserved</p>
         </footer>
        </>
    )
}
export default Footer;
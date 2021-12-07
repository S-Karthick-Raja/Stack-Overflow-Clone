
export function BottomNavbar() {
  const social = [
    {
      name :"Blog",
    },
    {
      name :"Facebook",
    },
    {
      name :"Twitter",
    },
    {
      name :"LinkedIn",
    },
    {
      name :"Instagram",
    },
  ]
  const StackOverflow = [
    {
      name :"Questions",
    },
    {
      name :"Jobs",
    },
    {
      name :"Developer Jobs Directory",
    },
    {
      name :"Salary Calculator",
    },
    {
      name :"Help",
    },
    {
      name :"Mobile",
    },
    {
      name :"Disable Responsiveness",
    },
  ]

  const Products = [
    {
      name :"Teams",
    },
    {
      name :"Talent",
    },
    {
      name :"Advertising",
    },
    {
      name :"Enterprise",
    },
  ]

  const Company =[
    {
      name :"About",
    },
    {
      name :"Press",
    },
    {
      name :"Work Here",
    },
    {
      name :"Legal",
    },
    {
      name :"Privacy Policy",
    },
    {
      name :"Tearms of service",
    },
    {
      name :"Contact Us",
    },
    {
      name :"Cookie Settings",
    }, 
    {
      name :"Cookie Policy",
    },
  ]

  const StackExchangeNetwork =[
    {
      name :"Technology",
    },
    {
      name :"Culture & recreation",
    },
    {
      name :"Life & arts",
    },
    {
      name :"Science",
    },
    {
      name :"Professional",
    },
    {
      name :"Business",
    },
    {
      name :"API",
    },
    {
      name :"Data",
    }, 
  ]
  return (
    <div className="Bottom_navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
          style={{ width: "37px", height: "37px" }}
          alt="stack-overflow-logo"
        />
        {social.map(({name}) => (<p>{name}</p>))}
      </div>
      <div>
        <h5>STACK OVERFLOW</h5>
        {StackOverflow.map(({name}) => (<p>{name}</p>))}
      </div>
      <div>
        <h5>PRODUCTS</h5>
        {Products.map(({name}) => (<p>{name}</p>))}
      </div>
      <div>
        <h5>COMPANY</h5>
        {Company.map(({name}) => (<p>{name}</p>))}
      </div>
      <div>
        <h5>STACK EXCHANGE NETWORK</h5>
        {StackExchangeNetwork.map(({name}) => (<p>{name}</p>))}
      </div>
    </div>
  );
}


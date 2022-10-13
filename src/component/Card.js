
// ---variables------

// const todoTitle = "Call Family";
// const todoDescription = "This is bangladesh paragraph for lorem This is bangladesh ";
const todoDate = "11-12-2021";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// -------component--------
function Card(props) {
  // alert(props);
  const { cardTitle,cardDescription } = props;
  console.log(props);
  return <div className="card">
            <h3 className="cardTitle">{cardTitle}</h3>
            <p className="cardDescription"> {cardDescription} </p>
            <p  className='cardFooter'> {todoDate + ' | ' + currentYear + ' | '+ dateName+'-'+monthName+'-'+ currentYear} </p>
          </div>
}

export default Card;
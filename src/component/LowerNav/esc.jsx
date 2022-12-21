
const CardData = [

    {
        id : 1,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"coding",
        catName: "Coding"



    },
    {
        id : 2,
        cardImg : "",
        c : "Aws",
        timesRemains: "8h 15m",
        category:"coding"



    },
    {
        id : 3,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"coding"



    },
    {
        id : 4,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"coding"



    },
    {
        id : 5,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"UI/UX"



    },
    {
        id : 6,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Design"



    },
    {
        id : 7,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Management"




    },
    {
        id : 8,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Finance"




    },
    {
        id : 9,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Civil Services"




    },
    {
        id : 10,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Civil Services"




    },
    {
        id : 11,
        cardImg : "",
        courseName : "Aws",
        timesRemains: "8h 15m",
        category:"Management"




    },
]
export default CardData;

const allcate =["All Program",...new Set(CardData.map((curElem)=>{return curElem.category;}))]

// -----------------------------insie funtion--------------------------


const [courses, setCourses] = useState(CardData);

const [catItems, setcatItems] = useState(allcate)



const FilterCourse = (category)=>{
    const updateCourse = CardData.filter((curElem)=>{
        return curElem.category === category;

    });
    setCourses(updateCourse)
}
// ----------------------------------------------------------------------

// button-------------------------------------------------

<button  onClick={()=>FilterCourse('AWS')}>UI/UX</button>
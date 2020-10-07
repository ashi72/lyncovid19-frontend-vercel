import React, {useState, useEffect} from 'react';
import CardList from './CardList';
import Pages from './Pages';


const StudentList = ({students, cardsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [students])

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
        console.log(currentPage);
    }


    const lastCardInd = currentPage * cardsPerPage;
    const firstCardInd = lastCardInd - cardsPerPage;
    const studentsToLoad = students.slice(firstCardInd, lastCardInd);
    if (!studentsToLoad) {
        setCurrentPage(1);
    }
    //console.log(studentsToLoad);
    //console.log(currentPage);
    return(
        <div>
            <CardList students={studentsToLoad}/>
            <Pages amount = {students.length} perPage = {cardsPerPage} handler = {handlePageChange}/>
        </div>
    );
};

export default StudentList;



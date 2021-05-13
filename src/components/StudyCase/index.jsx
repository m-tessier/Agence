import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clients from 'data/clients';


const StudyCase = () => {
  const [currentWork, setCurrentWork] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { workSlug } = useParams();

  useEffect(() => {
    const foundWork = clients.find((client) => client.slug === workSlug);
    setCurrentWork(foundWork);
    setIsLoading(true)
  }, [workSlug])


  return (
    <div className="StudyCase">
      {isLoading &&
        <div>
          <h3>{currentWork.name}</h3>
          <h4>{currentWork.title}</h4>
          <p>{currentWork.description}</p>
        </div>
      }
    </div>
  );
};

export default StudyCase;
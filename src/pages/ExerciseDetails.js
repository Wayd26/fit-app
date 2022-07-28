import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetails = () => {
    const [exerciseDetails, setExerciseDetails] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetails(exerciseDetailsData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name} exercise`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions);
        setEquipmentExercises(equimentExercisesData);
    };
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });


        fetchExercisesData();
    }, [id]);

    if (!exerciseDetails) return <div>No Data</div>;

    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Details exerciseDetails={exerciseDetails} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciseDetails;

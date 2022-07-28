import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { EXERCISES_BASE_URL } from '../constants/constants';

const SearchExercises = () => {

    const [search, setSearch] = useState("")
    const [exercises, setExercises] = useState([])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData(`${EXERCISES_BASE_URL}`, exerciseOptions);
            console.log("exercisesData ", exercisesData)
            const searchedExercises = exercisesData.filter(
                (exercise) => (exercise.name.toLocaleLowerCase().includes(search)) 
                || exercise.target.toLocaleLowerCase().includes(search)
                || exercise.equipment.toLocaleLowerCase().includes(search)
                || exercise.bodyPart.toLocaleLowerCase().includes(search));

                setSearch("")
                setExercises(searchedExercises)
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ lg: '44px', xs: '30px' }}>Awesome Exercises you <br /> should know</Typography>
            <Box position="relative"
                mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700', borderRadius: '4px', border: 'none'
                        },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: "#fff",
                        borderRadius: "40px"
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                    placeholder="Search exercises"
                    type="text" />
                <Button className="search-btn"
                    sx={{
                        backgroundColor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px'
                    }}
                    onClick={handleSearch}>Search</Button>
            </Box>
        </Stack>

    )
}

export default SearchExercises
import React, {useState} from 'react';
import {useAxiosGet} from "../hooks/httpRequests";
import Loader from "../components/Loader";
import Container from "@mui/material/Container";
import {Button, TextField, Typography} from "@mui/material";
import axios from "axios";

const Discover = () => {
    const [inputValue, setInputValue] = useState('');
    let content = null

    let GET_QUOTES_ENDPOINT = `http://127.0.0.1:5000/text`

    let quotes = useAxiosGet(GET_QUOTES_ENDPOINT)

    if (quotes.error) {
        content = <div className="bg-blue-300 mb-2 p-3 rounded">
            There was an error. Please, try to reload the page.
        </div>
    }

    if (quotes.loading) {
        content = <Loader/>
    }

    if(quotes.data) {
        content = quotes.data.map(quote =>
            <Typography variant="h5" gutterBottom component="div" key={quote.id}>- {quote.text}</Typography>
        )
    }

    const handleInputValueChange = event => {
        setInputValue(event.target.value)
    }

    const handleSend = () => {
        axios.post(
            'http://127.0.0.1:5000/sendText',
            JSON.stringify(inputValue),
            {headers: {'Content-Type': 'application/json'}}
        )
            .then(() => {
                window.location.reload()
            })
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Container sx={{paddingBottom: '50px'}} maxWidth="sm">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16}}>
                        <TextField id="outlined-basic" label="Text to show on screen" variant="outlined" value={inputValue} onChange={handleInputValueChange}/>
                        <Button size='large' onClick={handleSend}>Send</Button>
                    </div>
                    <Typography variant="h4" style={{marginTop: 32}} gutterBottom component="div">History of previous ads</Typography>
                    { content }
                </Container>
            </Container>
        </div>

    );
};

export default Discover;
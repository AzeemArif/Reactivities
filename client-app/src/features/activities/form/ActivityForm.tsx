import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    closeForm: () => void;
    selectedActivity: Activity | undefined;
    createOrEditActivity: (activity: Activity) => void;
    submitting: boolean;
}

export function ActivityForm ({closeForm, selectedActivity, createOrEditActivity, submitting}: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);
    
    function handleSubmit(){
        createOrEditActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement |HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
            <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
            <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
            <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
            <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
            <Form.Input placeholder='Venu' value={activity.venue} name='venue' onChange={handleInputChange}/>
            <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
            <Button onClick={closeForm} floated='right' positive type='button' content='Cancel' />
            </Form>
            
        </Segment>

    )
}
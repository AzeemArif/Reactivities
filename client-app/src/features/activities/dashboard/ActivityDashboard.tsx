import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../Details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";


interface Props {
    activities : Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActvity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeform: () => void;
    createOrEditActivity: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export  default function ActivityDashboard({activities, selectActivity, selectedActivity,
                                         cancelSelectActvity, editMode, openForm,
                                         closeform, createOrEditActivity, deleteActivity}: Props)
 {
    return(
        <Grid>
            <Grid.Column width='10'>
            <ActivityList activities = {activities} selectActivity = {selectActivity} deleteActivity = {deleteActivity} /> 
            </Grid.Column>
            <Grid.Column width='6'>
                { selectedActivity && !editMode &&
                    <ActivityDetails 
                    activity = {selectedActivity} 
                    cancelSelectActivity = {cancelSelectActvity}
                    openForm = {openForm}
                    />
                }
                {
                    editMode &&
                    <ActivityForm  closeForm = {closeform} selectedActivity = {selectedActivity} createOrEditActivity= {createOrEditActivity}/>
                } 

            </Grid.Column>
        </Grid>
    )
}
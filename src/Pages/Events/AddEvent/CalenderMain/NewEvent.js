import React from 'react'
import { useForm } from 'react-hook-form';
const NewEvent = () => {
    // const [show, setShow] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset();
    }


    return (
        <>
            <div id="newEventModal">
                <h4>New Event</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    {...register("eventTitle", {
                        required: true,
                    })}
                        id="eventTitleInput"
                        placeholder="Event Title"
                    />
                    <textarea
                    {...register("eventDesc", {
                        required: true,
                    })}
                        id="eventDescriptionInput"
                        placeholder="Event Description"
                    />

                    <div className='actiobButtonsSV'>
                        <button
                        type='submit'
                            className='btn'
                            id="saveButton">Save</button>


                        <button
                            className='btn'
                            id="cancelButton">Cancel</button>
                    </div>
                </form>

            </div>

            <div id="modalBackDrop"></div>
        </>
    )
}
export default NewEvent
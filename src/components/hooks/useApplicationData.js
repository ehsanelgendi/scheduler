import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      // console.log('all:', all);
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  const updateSpots = (appointmentId, appointments) => {
    const day = state.days.find(day => day.appointments.includes(appointmentId));

    const spots = day.appointments.filter(id => appointments[id].interview === null).length;

    return state.days.map(day => day.appointments.includes(appointmentId) ? { ...day, spots: spots } : day);
  };
  
  // to save interview data 
  function bookInterview(id, interview) {
    // console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {
      interview: interview
    }).then(res => {
      setState({ ...state, appointments, days: updateSpots(id, appointments) });
    });
  }

  function cancelInterview(id) {
    // set interview data to null to delete appointment
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({ ...state, appointments, days: updateSpots(id, appointments) });
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
};
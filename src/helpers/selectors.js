export function getAppointmentsForDay(state, day) {
  
  let apoitnments = [];
  let appointmentsForDay = [];

  const filteredStateDay = state.days.filter(item => item.name === day);

  filteredStateDay.forEach((item) => {
    apoitnments = item.appointments;
  });

  apoitnments = apoitnments.map(String);

  for(let item of apoitnments) {
    if (Object.keys(state.appointments).includes(item)) {
      appointmentsForDay.push(state.appointments[item]);
    }
  }
    
  return appointmentsForDay;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewerId = interview.interviewer;
  const interviewer = state.interviewers[interviewerId];
  return {...interview, interviewer: interviewer};
}
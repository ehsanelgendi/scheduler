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

export function getInterviewersForDay(state, day) {
  let interviewers = [];
  let interviewersForDay = [];

  const filteredStateDay = state.days.filter(item => item.name === day);

  filteredStateDay.forEach((item) => {
    interviewers = item.interviewers;
  });

  interviewers = interviewers.map(String);

  for(let item of interviewers) {
    if (Object.keys(state.interviewers).includes(item)) {
      interviewersForDay.push(state.interviewers[item]);
    }
  }
    
  return interviewersForDay;

}
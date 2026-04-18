



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...arrays) {
  // Merge all arrays into one
  const users = [].concat(...arrays);
  
  // Create a date of merging, formatted as M/d/yyyy
  const mergeDate = new Date();
  const merge_date = mergeDate.toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  // Return an object with merged array and date
  return {
    users: users,
    merge_date: merge_date
  };
}
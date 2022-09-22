import clubs from "./clubs.js";

class DataSource{
  static searchClub(keyword) {
    return new Promise ((resolved, reject )=>{
      const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
    
      if (filteredClubs.length) {
        resolved(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
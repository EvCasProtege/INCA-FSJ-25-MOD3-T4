export const processBootcampData = (data) => {
    const activeBootcamps = data.filter(bootcamp => bootcamp.active);
  
    const technologyCount = {};
    activeBootcamps.forEach(bootcamp => {
      bootcamp.technologies.forEach(tech => {
        if (technologyCount[tech]) {
          technologyCount[tech]++;
        } else {
          technologyCount[tech] = 1;
        }
      });
    });
  
    const labels = Object.keys(technologyCount);
    const counts = Object.values(technologyCount);
  
    return { labels, counts };
  };
  
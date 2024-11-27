import React from "react";
import { Container, ImageCustom, Typo } from "../../atoms";

const Details = ({
  imageURL,
  eventTitle,
  eventDescription,
  startDate,
  endDate,
  organizerName,
}) => {
  const formatDate = (start, end) => {
    // Lun 5 Août de 19h30 à 23h00 faire ce format avec le startDate et endDate, mettre Du Lun 5 Août au Mer 7 Août si plusieurs jours, la date arrive au format 2025-04-23T18:25:43.511Z
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth();
    const startHour = startDate.getHours();
    const startMinute = startDate.getMinutes();
    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth();
    const endHour = endDate.getHours();
    const endMinute = endDate.getMinutes();
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const months = [
      "Janv",
      "Fév",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil",
      "Août",
      "Sept",
      "Oct",
      "Nov",
      "Déc",
    ];
    const startDayName = days[startDate.getDay()];
    const endDayName = days[endDate.getDay()];
    const startMonthName = months[startMonth];
    const endMonthName = months[endMonth];
    const startHourString = startHour.toString().padStart(2, "0");
    const startMinuteString = startMinute.toString().padStart(2, "0");
    const endHourString = endHour.toString().padStart(2, "0");
    const endMinuteString = endMinute.toString().padStart(2, "0");
    if (startDay === endDay && startMonth === endMonth) {
      return `${startDayName} ${startDay} ${startMonthName} de ${startHourString}h${startMinuteString} à ${endHourString}h${endMinuteString}`;
    } else {
      return `Du ${startDayName} ${startDay} ${startMonthName} au ${endDayName} ${endDay} ${endMonthName}`;
    }
  };
  return (
    <Container.PageContainer justifyContent={"flex-start"}>
      <ImageCustom.Rectangle source={imageURL} />
      <Typo.Gotham text={eventTitle} />
      <Typo.OwnersText text={"Par " + organizerName} />
      {/* Lun 5 Août de 19h30 à 23h00 faire ce format avec le startDate et endDate, mettre Du Lun 5 Août au Mer 7 Août si plusieurs jours, la date arrive au format 2025-04-23T18:25:43.511Z */}
      <Typo.OwnersText text={formatDate(startDate, endDate)} />
      <Typo.OwnersText text={'description'} uppercase />
      <Typo.OwnersText text={eventDescription} />
    </Container.PageContainer>
  );
};

export default Details;

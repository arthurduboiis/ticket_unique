import React from "react";
import { Button, Container, ImageCustom, Tag, Typo } from "../../atoms";
import { useThemeColor } from '../../../hooks/useThemeColor';
import { LikeCheckbox, OrgaItem } from "../../molecules";

const Details = ({
  imageURL,
  eventTitle,
  eventDescription,
  startDate,
  endDate,
  organizerName,
  mood,
  source,
  startingPrice,
  action,
  liked,
  toggleLiked,
  numberOfLike,
}) => {

  let interestedPeopleText = "Il n'y a pas encore de participants intéressés";
  if (numberOfLike === 1) {
    interestedPeopleText = "1 personne intéressée";
  } else if (numberOfLike > 1) {
    interestedPeopleText = `${numberOfLike} personnes intéressées`;
  }

  const formatDate = (start, end) => {
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
  console.log(source);
  return (
    <Container.PageContainer
      justifyContent={"space-between"}
      paddingBottom={"0px"}
    >
      <Container.ColContainer gap={"10px"}>
        <ImageCustom.Rectangle source={imageURL} />
        <Typo.Gotham text={eventTitle} />
        <Typo.OwnersText>
          <Typo.OwnersText color={useThemeColor("dimmedLight")}>
            Par{" "}
          </Typo.OwnersText>
          {organizerName}
        </Typo.OwnersText>
        <Container.RowContainer gap={"10px"}>
          <LikeCheckbox liked={liked} toggleLiked={toggleLiked} />
          <Typo.OwnersText >{interestedPeopleText}</Typo.OwnersText>
        </Container.RowContainer>
        <Typo.OwnersText>{formatDate(startDate, endDate)}</Typo.OwnersText>
        <Typo.OwnersText uppercase>{"description"}</Typo.OwnersText>
        <Typo.OwnersText>{eventDescription}</Typo.OwnersText>
        {mood ? (
          <Container.ColContainer gap={"5px"}>
            <Typo.OwnersText uppercase>{"Mood"}</Typo.OwnersText>
            <Tag.Base title={mood} />
          </Container.ColContainer>
        ) : null}
        <Typo.OwnersText uppercase>{"Organisé par"}</Typo.OwnersText>
        <OrgaItem
          eventsNumber={0}
          followersNumber={0}
          orgaName={organizerName}
          source={source}
        />
      </Container.ColContainer>
      <Button.Base
        title={"à partir de " + startingPrice + "€"}
        action={action}
      />
    </Container.PageContainer>
  );
};

export default Details;

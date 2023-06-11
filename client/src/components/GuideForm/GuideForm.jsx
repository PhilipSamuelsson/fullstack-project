import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./GuideForm.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="guidecontainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Rom, Den eviga staden"
          subheader="Romantik & Kultur"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Rom/Italy"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet debitis, aspernatur sequi dolor, tempore facere et accusamus
            quam qui, nesciunt iure quas eius fugiat necessitatibus
            exercitationem dolorem? Consequuntur reiciendis at ullam, delectus
            ipsa neque ipsum iure laborum iste quam!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Fakta:</Typography>
            <Typography paragraph>
              Enligt legenden grundades staden Rom den 21 april 753 f.Kr. (se ab
              urbe condita) på sju legendariska kullar vid floden Tibern av
              Romulus, den ene av de två bröderna Romulus och Remus. De två hade
              blivit uppfödda av en varginna och sedan vuxit upp hos herden
              Faustulus. I flera hundra år var Rom, som var huvudstad i
              Kungariket Rom, Romerska republiken och Romerska riket, den
              viktigaste staden i Västvärlden. Rom blev också en viktig stad som
              centrum för den katolska kyrkan och som residensstad för
              Kyrkostatens, sedermera Vatikanstatens, påvar. Genom renässansen
              blev Rom åter ett politiskt centrum efter medeltidens nedgång.
              Staden är än i dag en inflytelserik världsstad. Exempelvis är Rom
              den tredje största FN-staden i världen, som säte för de tre
              fackorganen FAO, IFAD och WFP.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Amsterdam/Nederländerna"
          subheader="Spännande"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Amsterdam/Nederländerna"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            suscipit reiciendis error vitae delectus dolor blanditiis similique
            recusandae ducimus accusamus aspernatur, sed mollitia, veritatis
            voluptate dolorem rem quam? Reiciendis officiis totam eius error
            obcaecati consectetur repudiandae suscipit, inventore libero in.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Fakta:</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              iure sit voluptatibus tempore. Labore natus quas culpa dignissimos
              pariatur, illo deleniti et delectus esse ratione, animi aliquid
              est facere molestias veniam ducimus debitis repudiandae
              voluptatibus mollitia architecto quis nemo provident sapiente
              ullam! Totam architecto odit quaerat. Non vel accusamus quia
              repellat explicabo voluptate, aperiam maxime corrupti autem
              blanditiis, at ad suscipit voluptatibus, voluptatem veritatis
              voluptas nisi modi! Molestiae exercitationem doloremque iusto
              dicta, quos, quibusdam corporis cupiditate, quas aspernatur
              deleniti sint similique? Eos debitis magnam error adipisci illum
              cumque atque nesciunt?
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Paris"
          subheader="Mums"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paris/Frankrike"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odio
            quia possimus dicta quas, reiciendis quod earum facilis, inventore
            beatae, maxime eos aliquid? Hic vero ad velit ea accusamus, iusto
            necessitatibus alias incidunt nostrum adipisci at ratione distinctio
            dolores deleniti.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Fakta:</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore consequatur molestias repellat in, officia quasi nam
              repellendus fugiat saepe et dolorem alias ea necessitatibus illo,
              dolore eum expedita sit atque hic. Ad cupiditate iste porro
              recusandae corrupti a? Maxime at et nulla, tenetur itaque magni
              dolorem vero asperiores molestias ut, incidunt eveniet tempora
              numquam laudantium dignissimos est nemo? Perferendis nam dolorum,
              fugit quia perspiciatis explicabo molestiae voluptas omnis?
              Consequatur veniam voluptatum sunt, corporis sit incidunt iusto,
              ad, iste quidem recusandae laboriosam sed aut. Id fugit aperiam
              ipsam, neque a accusamus!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

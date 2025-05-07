import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';

const cardData = [
    {
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Maintenance ',
        title: 'Plumbing Services',
        description:
            'Provided essential plumbing solutions including leak repairs, pipe fittings, and water system maintenance to ensure uninterrupted water supply.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=2',
        tag: 'Health & Hygiene',
        title: 'Electrical Services',
        description:
            'Offered safe and efficient electrical installations, wiring repairs, and maintenance for homes and community centers.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'Household',
        title: 'HVAC Services',
        description:
            'Ensured comfort through HVAC system checks, filter replacements, and ventilation improvements to support healthy indoor environments.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=4',
        tag: 'Environmental',
        title: "Pest Control Services",
        description:
            "Conducted pest eradication drives targeting mosquitoes, rodents, and insects, promoting cleaner and healthier living conditions.",
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=45',
        tag: 'Environmental',
        title: 'Cleaning Services',
        description:
            "Delivered professional cleaning for public spaces and households, focusing on sanitation and waste removal for hygienic surroundings.",
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=6',
        tag: 'Health & Hygiene  ',
        title: 'AC Repair Services',
        description:
            'Repaired and maintained air conditioning units to provide cooling relief and improve air circulation during extreme heat periods.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
];

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transform: 'scale(1.02)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const SyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    backgroundColor: (theme.vars || theme).palette.background.default,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (theme.vars || theme).palette.text.primary,
}));

function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.name}
                            src={author.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {authors.map((author) => author.name).join(', ')}
                </Typography>
            </Box>
            <Typography variant="caption">July 14, 2021</Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export const MainContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState("");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredCards = cardData.filter((card) => {
        const combinedText = `${card.title} ${card.description} ${card.tag} ${card.authors
            .map((author) => author.name)
            .join(' ')}`.toLowerCase();
        return combinedText.includes(searchQuery) && (selectedCategory === 'All' || card.tag === selectedCategory);
    });

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: { xs: 2, md: 4 }, // Responsive padding
                backgroundColor: '#f9f9f9', // Light background color
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for the container
            }}
        >
            {/* Title */}
            <Typography
                variant="h1"
                gutterBottom
                sx={{
                    fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #C68EFD, #261FB3)', // Gradient background
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', // Makes the gradient apply to text
                    padding: '20px',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease', // Smooth transition for hover effect
                    '&:hover': {
                        color: '#A2D2DF', // Change text color on hover
                        WebkitTextFillColor: 'unset', // Remove gradient on hover
                    },
                }}
            >
                Welcome To Home Page
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    color: '#555', // Subtle gray color for the subtitle
                    maxWidth: '800px', // Limit the width for better readability
                }}
            >
                Stay in the loop with the latest about our products
            </Typography>

            {/* Chips and Search Bar */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '900px', // Limit the width of the chips and search bar
                }}
            >
                {['All', 'Maintenance ', 'Health & Hygiene', 'Household', 'Environmental'].map((category) => (
                    <Chip
                        key={category}
                        label={category}
                        onClick={() => handleCategoryClick(category)}
                        color={selectedCategory === category ? 'primary' : 'default'}
                        sx={{
                            fontSize: { xs: '0.8rem', md: '1rem' }, // Responsive font size
                            padding: '8px 12px', // Add padding for better spacing
                        }}
                    />
                ))}
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    onChange={handleSearch}
                    sx={{
                        flexGrow: 1,
                        maxWidth: '300px', // Limit the width of the search bar
                        backgroundColor: '#fff', // White background for the search bar
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for the search bar
                    }}
                />
            </Box>

            {/* Cards */}
            <Grid
                container
                spacing={3}
                sx={{
                    marginTop: 2,
                    justifyContent: 'center',
                }}
            >
                {filteredCards.map((card, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <SyledCard
                            sx={{
                                width: '100%',
                                maxWidth: '350px', // Limit the card width
                                backgroundColor: '#fff', // White background for the card
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for the card
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)', // Slight zoom effect on hover
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt={card.title}
                                image={card.img}
                                sx={{
                                    aspectRatio: '16 / 9',
                                    objectFit: 'cover', // Ensure the image covers the area
                                }}
                            />
                            <SyledCardContent>
                                <Typography
                                    gutterBottom
                                    variant="caption"
                                    sx={{
                                        color: '#888', // Subtle gray color for the tag
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {card.tag}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#333', // Darker color for the title
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <StyledTypography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        color: '#555', // Subtle gray color for the description
                                    }}
                                >
                                    {card.description}
                                </StyledTypography>
                            </SyledCardContent>
                            <Author authors={card.authors} />
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
// Back Up Code

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Chip from '@mui/material/Chip';
// import Grid from '@mui/material/Grid2';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { styled } from '@mui/material/styles';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

// const cardData = [
//     {
//         img: 'https://picsum.photos/800/450?random=1',
//         tag: 'Engineering',
//         title: 'Revolutionizing software development with cutting-edge tools',
//         description:
//             'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
//         authors: [
//             { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
//             { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
//         ],
//     },
//     {
//         img: 'https://picsum.photos/800/450?random=2',
//         tag: 'Product',
//         title: 'Innovative product features that drive success',
//         description:
//             'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
//         authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
//     },
//     {
//         img: 'https://picsum.photos/800/450?random=3',
//         tag: 'Design',
//         title: 'Designing for the future: trends and insights',
//         description:
//             'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
//         authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
//     },
//     {
//         img: 'https://picsum.photos/800/450?random=4',
//         tag: 'Company',
//         title: "Our company's journey: milestones and achievements",
//         description:
//             "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
//         authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
//     },
//     {
//         img: 'https://picsum.photos/800/450?random=45',
//         tag: 'Engineering',
//         title: 'Pioneering sustainable engineering solutions',
//         description:
//             "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
//         authors: [
//             { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
//             { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
//         ],
//     },
//     {
//         img: 'https://picsum.photos/800/450?random=6',
//         tag: 'Product',
//         title: 'Maximizing efficiency with our latest product updates',
//         description:
//             'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
//         authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
//     },
// ];

// const SyledCard = styled(Card)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 0,
//     height: '100%',
//     backgroundColor: (theme.vars || theme).palette.background.paper,
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '8px',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     '&:hover': {
//         backgroundColor: 'transparent',
//         cursor: 'pointer',
//         transform: 'scale(1.02)',
//         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     },
//     '&:focus-visible': {
//         outline: '3px solid',
//         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
//         outlineOffset: '2px',
//     },
// }));

// const SyledCardContent = styled(CardContent)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 4,
//     padding: 16,
//     flexGrow: 1,
//     backgroundColor: (theme.vars || theme).palette.background.default,
//     '&:last-child': {
//         paddingBottom: 16,
//     },
// }));

// const StyledTypography = styled(Typography)(({ theme }) => ({
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: 2,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     color: (theme.vars || theme).palette.text.primary,
// }));

// function Author({ authors }) {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 gap: 2,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: '16px',
//                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                 borderRadius: '8px',
//             }}
//         >

// service provider as author/ provider profile page: use gibli studio
//
//             <Box
//                 sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
//             >
//                 <AvatarGroup max={3}>
//                     {authors.map((author, index) => (
//                         <Avatar
//                             key={index}
//                             alt={author.name}
//                             src={author.avatar}
//                             sx={{ width: 24, height: 24 }}
//                         />
//                     ))}
//                 </AvatarGroup>
//                 <Typography variant="caption">
//                     {authors.map((author) => author.name).join(', ')}
//                 </Typography>
//             </Box>
//             <Typography variant="caption">July 14, 2021</Typography>
//         </Box >
//     );
// }

// Author.propTypes = {
//     authors: PropTypes.arrayOf(
//         PropTypes.shape({
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//         }),
//     ).isRequired,
// };

// search functionality: for services and service provider by the name or str globally  search

// export function Search() {
//     return (
//         <FormControl sx={{
//             width: { xs: '100%', md: '25ch' }, justifyContent: 'center',
//             alignItems: 'center'
//         }} variant="outlined">
//             <OutlinedInput
//                 size="small"
//                 id="search"
//                 placeholder="Search…"
//                 sx={{ flexGrow: 1 }}
//                 startAdornment={
//                     <InputAdornment position="start" sx={{ color: 'text.primary' }}>
//                         <SearchRoundedIcon fontSize="small" />
//                     </InputAdornment>
//                 }
//                 inputProps={{
//                     'aria-label': 'search',
//                 }}
//             />
//         </FormControl>
//     );
// }

// export const MainContent = () => {
//     const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

//     const handleFocus = (index) => {
//         setFocusedCardIndex(index);
//     };

//     const handleBlur = () => {
//         setFocusedCardIndex(null);
//     };

//     const handleClick = () => {
//         console.info('You clicked the filter chip.');
//     };

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, backgroundColor: '#F1EFEC', padding: 4, borderRadius: '8px' }}>
//             <div>
//                 <Typography variant="h1" gutterBottom textAlign="center">
//                     Hero Page/ Home
//                 </Typography>
//                 <Typography textAlign="center">Stay in the loop with the latest about our products</Typography>
//             </div>
//             <Box
//                 sx={{
//                     display: { xs: 'flex', sm: 'none' },
//                     flexDirection: 'row',
//                     gap: 1,
//                     width: { xs: '100%', md: 'fit-content' },
//                     overflow: 'auto',
//                 }}
//             >
//                 <Search />
//                 <IconButton size="small" aria-label="RSS feed">
//                     <RssFeedRoundedIcon />
//                 </IconButton>
//             </Box>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: { xs: 'column-reverse', md: 'row' },
//                     width: '100%',
//                     justifyContent: 'center',
//                     alignItems: { xs: 'center', md: 'center' },
//                     gap: 4,
//                     overflow: 'auto',
//                 }}
//             >
//                 <Box
//                     sx={{
//                         justifyContent: 'center',
//                         alignItems: { xs: 'center', md: 'center' },
//                         display: 'inline-flex',
//                         flexDirection: 'row',
//                         gap: 3,
//                         overflow: 'auto',
//                     }}
//                 >
//                     <Chip onClick={handleClick} size="medium" label="All categories" />
//                     <Chip
//                         onClick={handleClick}
//                         size="medium"
//                         label="Company"
//                         sx={{
//                             backgroundColor: 'transparent',
//                             justifyContent: 'center',
//                             alignItems: { xs: 'center', md: 'center' },
//                             border: 'none',
//                         }}
//                     />
//                     <Chip
//                         onClick={handleClick}
//                         size="medium"
//                         label="Product"
//                         sx={{
//                             backgroundColor: 'transparent',
//                             justifyContent: 'center',
//                             alignItems: { xs: 'center', md: 'center' },
//                             border: 'none',
//                         }}
//                     />
//                     <Chip
//                         onClick={handleClick}
//                         size="medium"
//                         label="Design"
//                         sx={{
//                             backgroundColor: 'transparent',
//                             border: 'none',
//                             justifyContent: 'center',
//                             alignItems: { xs: 'center', md: 'center' },

//                         }}
//                     />
//                     <Chip
//                         onClick={handleClick}
//                         size="medium"
//                         label="Engineering"
//                         sx={{
//                             backgroundColor: 'transparent',
//                             justifyContent: 'center',
//                             alignItems: { xs: 'center', md: 'center' },
//                             border: 'none',
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     sx={{
//                         display: { xs: 'none', sm: 'flex' },
//                         flexDirection: 'row',
//                         gap: 1,
//                         width: { xs: '100%', md: 'fit-content' },
//                         overflow: 'auto',
//                         justifyContent: 'center',
//                         alignItems: { xs: 'center', md: 'center' },

//                     }}
//                 >
//                     <Search />
//                     <IconButton size="small" aria-label="RSS feed">
//                         <RssFeedRoundedIcon />
//                     </IconButton>
//                 </Box>
//             </Box>
//             <Grid container spacing={2} columns={12}>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <SyledCard
//                         variant="outlined"
//                         onFocus={() => handleFocus(0)}
//                         onBlur={handleBlur}
//                         tabIndex={0}
//                         className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
//                     >
//                         <CardMedia
//                             component="img"
//                             alt="green iguana"
//                             image={cardData[0].img}
//                             sx={{
//                                 aspectRatio: '16 / 9',
//                                 borderBottom: '1px solid',
//                                 justifyContent: 'center',
//                                 alignItems: { xs: 'center', md: 'center' },
//                                 borderColor: 'divider',
//                             }}
//                         />
//                         <SyledCardContent>
//                             <Typography gutterBottom variant="caption" component="div">
//                                 {cardData[0].tag}
//                             </Typography>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 {cardData[0].title}
//                             </Typography>
//                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                                 {cardData[0].description}
//                             </StyledTypography>
//                         </SyledCardContent>
//                         <Author authors={cardData[0].authors} />
//                     </SyledCard>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 6 }}>
//                     <SyledCard
//                         variant="outlined"
//                         onFocus={() => handleFocus(1)}
//                         onBlur={handleBlur}
//                         tabIndex={0}
//                         className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
//                     >
//                         <CardMedia
//                             component="img"
//                             alt="green iguana"
//                             image={cardData[1].img}
//                             aspect-ratio="16 / 9"
//                             sx={{
//                                 justifyContent: 'center',
//                                 alignItems: { xs: 'center', md: 'center' },
//                                 borderBottom: '1px solid',
//                                 borderColor: 'divider',
//                             }}
//                         />
//                         <SyledCardContent>
//                             <Typography gutterBottom variant="caption" component="div">
//                                 {cardData[1].tag}
//                             </Typography>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 {cardData[1].title}
//                             </Typography>
//                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                                 {cardData[1].description}
//                             </StyledTypography>
//                         </SyledCardContent>
//                         <Author authors={cardData[1].authors} />
//                     </SyledCard>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <SyledCard
//                         variant="outlined"
//                         onFocus={() => handleFocus(2)}
//                         onBlur={handleBlur}
//                         tabIndex={0}
//                         className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
//                         sx={{
//                             height: '100%', justifyContent: 'center',
//                             alignItems: 'center'
//                         }}
//                     >
//                         <CardMedia
//                             component="img"
//                             alt="green iguana"
//                             image={cardData[2].img}
//                             sx={{
//                                 height: { sm: 'auto', md: '50%' },
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 aspectRatio: { sm: '16 / 9', md: '' },
//                             }}
//                         />
//                         <SyledCardContent>
//                             <Typography gutterBottom variant="caption" component="div">
//                                 {cardData[2].tag}
//                             </Typography>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 {cardData[2].title}
//                             </Typography>
//                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                                 {cardData[2].description}
//                             </StyledTypography>
//                         </SyledCardContent>
//                         <Author authors={cardData[2].authors} />
//                     </SyledCard>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <Box
//                         sx={{
//                             display: 'flex', flexDirection: 'column', gap: 2,
//                             height: '100%', justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <SyledCard
//                             variant="outlined"
//                             onFocus={() => handleFocus(3)}
//                             onBlur={handleBlur}
//                             tabIndex={0}
//                             className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
//                             sx={{ height: '100%' }}
//                         >
//                             <SyledCardContent
//                                 sx={{
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     height: '100%'
//                                 }}
//                             >
//                                 <div>
//                                     <Typography gutterBottom variant="caption" component="div">
//                                         {cardData[3].tag}
//                                     </Typography>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         {cardData[3].title}
//                                     </Typography>
//                                     <StyledTypography
//                                         variant="body2"
//                                         color="text.secondary"
//                                         gutterBottom
//                                     >
//                                         {cardData[3].description}
//                                     </StyledTypography>
//                                 </div>
//                             </SyledCardContent>
//                             <Author authors={cardData[3].authors} />
//                         </SyledCard>
//                         <SyledCard
//                             variant="outlined"
//                             onFocus={() => handleFocus(4)}
//                             onBlur={handleBlur}
//                             tabIndex={0}
//                             className={focusedCardIndex === 4 ? 'Mui-focused' : ''}
//                             sx={{ height: '100%' }}
//                         >
//                             <SyledCardContent
//                                 sx={{
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     height: '100%',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <div>
//                                     <Typography gutterBottom variant="caption" component="div">
//                                         {cardData[4].tag}
//                                     </Typography>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         {cardData[4].title}
//                                     </Typography>
//                                     <StyledTypography
//                                         variant="body2"
//                                         color="text.secondary"
//                                         gutterBottom
//                                     >
//                                         {cardData[4].description}
//                                     </StyledTypography>
//                                 </div>
//                             </SyledCardContent>
//                             <Author authors={cardData[4].authors} />
//                         </SyledCard>
//                     </Box>
//                 </Grid>
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <SyledCard
//                         variant="outlined"
//                         onFocus={() => handleFocus(5)}
//                         onBlur={handleBlur}
//                         tabIndex={0}
//                         className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
//                         sx={{ height: '100%' }}
//                     >
//                         <CardMedia
//                             component="img"
//                             alt="green iguana"
//                             image={cardData[5].img}
//                             sx={{
//                                 height: { sm: 'auto', md: '50%' },
//                                 aspectRatio: { sm: '16 / 9', md: '' },
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                         />
//                         <SyledCardContent>
//                             <Typography gutterBottom variant="caption" component="div">
//                                 {cardData[5].tag}
//                             </Typography>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 {cardData[5].title}
//                             </Typography>
//                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                                 {cardData[5].description}
//                             </StyledTypography>
//                         </SyledCardContent>
//                         <Author authors={cardData[5].authors} />
//                     </SyledCard>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

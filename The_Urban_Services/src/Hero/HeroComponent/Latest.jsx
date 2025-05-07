import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const articleInfo = [
    {
        tag: 'Maintenance',
        title: 'Plumbing Services',
        description:
            'Essential plumbing solutions including leak repairs, pipe fittings, and water system maintenance to ensure uninterrupted water supply.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        tag: 'Maintenance',
        title: 'Electrical Services',
        description:
            'Safe and efficient electrical installations, wiring repairs, and maintenance for homes and community centers.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        tag: 'Environmental',
        title: 'HVAC Services',
        description:
            'Ensuring comfort through HVAC system checks, filter replacements, and ventilation improvements to support healthy indoor environments.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        tag: 'Health & Hygiene',
        title: 'Pest Control Services',
        description:
            'Pest eradication drives targeting mosquitoes, rodents, and insects, promoting cleaner and healthier living conditions.',
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        tag: 'Health & Hygiene',
        title: 'Cleaning Services',
        description:
            'Professional cleaning for public spaces and households, focusing on sanitation and waste removal for hygienic surroundings.',
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        tag: 'Environmental',
        title: 'AC Repair Services',
        description:
            'Repairing and maintaining air conditioning units to provide cooling relief and improve air circulation during extreme heat periods.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
    {
        tag: 'Household',
        title: 'Household Essentials',
        description:
            'Providing essential household services such as plumbing, cleaning, and electrical repairs to ensure a comfortable living environment.',
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        tag: 'Household',
        title: 'Cleaning Services',
        description:
            'Comprehensive cleaning services for homes, ensuring a spotless and hygienic environment for families.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
];

const StyledTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (theme.vars || theme).palette.text.primary,
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    textDecoration: 'none',
    '&:hover': { cursor: 'pointer' },
    '& .arrow': {
        visibility: 'hidden',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    '&:hover .arrow': {
        visibility: 'visible',
        opacity: 0.7,
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '3px',
        borderRadius: '8px',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: '1px',
        bottom: 0,
        left: 0,
        backgroundColor: (theme.vars || theme).palette.text.primary,
        opacity: 0.3,
        transition: 'width 0.3s ease, opacity 0.3s ease',
    },
    '&:hover::before': {
        width: '100%',
    },
}));

function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                padding: '8px',
                borderRadius: '8px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
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
        }),
    ).isRequired,
};

export const Latest = () => {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    return (
        <div>
            <Typography variant="h2" gutterBottom textAlign="center">
                Latest
            </Typography>
            <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
                {articleInfo.map((article, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 1,
                                height: '100%',
                                backgroundColor: '#f5f5f5',
                                padding: 2,
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Typography gutterBottom variant="caption" component="div">
                                {article.tag}
                            </Typography>
                            <TitleTypography
                                gutterBottom
                                variant="h6"
                                onFocus={() => handleFocus(index)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === index ? 'Mui-focused' : ''}
                            >
                                {article.title}
                                <NavigateNextRoundedIcon
                                    className="arrow"
                                    sx={{ fontSize: '1rem' }}
                                />
                            </TitleTypography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {article.description}
                            </StyledTypography>

                            <Author authors={article.authors} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, justifyContent: 'center' }}>
                <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
            </Box> */}
        </div>
    );
}

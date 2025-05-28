import { defineQuery } from 'next-sanity'

export const INTRO_QUERY = defineQuery(`*[_type == "intro"][0]{
  _id,
  title,
  description
}`)

export const COURSE_QUERY = defineQuery(`*[_type == "course"]{  
  _id,
  title,
  description,
  dates,
  maxAttendees,
  location,
  price,
  image{
    asset->{url}
  },
  alt
}`)

export const TEAM_MEMBERS_QUERY = defineQuery(`*[_type == "team-member"] | order(sortOrder asc){  
  _id,
  name,
  title,
  phone,
  mail,
  image{
    asset->{url}
  },
  description
}`)

export const SERVICE_QUERY = defineQuery(`*[_type == "service"] | order(sortOrder asc){  
  _id,
  title,
  description,
  image{
    asset->{url}
  },
}`)

export const SINGLE_SERVICE_QUERY = defineQuery(`*[_type == "service" && title == $title][0]{
    _id,
  title,
  description,
  image{
    asset->{url}
  },
  paragraphs[],
}`)

export const ROOMS_QUERY = defineQuery(`*[_type == "room-image"]{  
  _id,
  image{
    asset->{url}
  },
  alt,
  caption,
}`)

export const TEAM_IMAGE_QUERY = defineQuery(`*[_type == "team-image"][0]{  
  _id,
  image{
    asset->{url}
  },
  title,
  description
}`)

export const SCHEDULE_QUERY = defineQuery(`*[_type == "schedule"]{  
  _id,
  title,
  date,
  content,
  location,
}`)

export const CONTACT_FORM_QUERY = defineQuery(`*[_type == "contact-form"][0]{  
  _id,
reason  
}`)

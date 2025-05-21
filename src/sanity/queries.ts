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
  date,
  maxAttendees,
  location,
  price,
  image{
    asset->{url}
  },
  alt
}`)

export const TeamMembersQuery = defineQuery(`*[_type == "team-members"]{  
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

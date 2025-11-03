# YUltimate API Reference

Base URL: `http://localhost:3001`

## Authentication

### POST /auth/signup
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "COACH" // Optional: ADMIN, COACH, PLAYER, SPECTATOR
}
```

### POST /auth/signin
Login user
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET /auth/profile
Get user profile (requires JWT token)

## Tournament Management

### POST /tournaments
Create tournament (requires auth)
```json
{
  "name": "Spring Championship",
  "field": "Main Field",
  "category": "Mixed",
  "startDate": "2024-03-15T10:00:00Z",
  "endDate": "2024-03-17T18:00:00Z"
}
```

### GET /tournaments
Get all tournaments

### GET /tournaments/:id
Get tournament by ID

### POST /tournaments/teams
Create team (requires auth)
```json
{
  "name": "Thunder Bolts",
  "tournamentId": "tournament-id"
}
```

### POST /tournaments/players
Register player (requires auth)
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "teamId": "team-id"
}
```

### PATCH /tournaments/teams/:id/spirit-score
Update spirit score (requires auth)
```json
{
  "spiritScore": 85
}
```

### GET /tournaments/:id/leaderboard
Get tournament leaderboard

## Coaching Management

### POST /coaching/children
Add child profile (requires auth)
```json
{
  "name": "Alex Johnson",
  "age": 12,
  "gender": "MALE"
}
```

### GET /coaching/children
Get coach's children (requires auth)

### POST /coaching/sessions
Create session (requires auth)
```json
{
  "title": "Basic Skills Training",
  "date": "2024-03-20T15:00:00Z"
}
```

### GET /coaching/sessions
Get coach's sessions (requires auth)

### POST /coaching/attendance
Mark attendance (requires auth)
```json
{
  "childId": "child-id",
  "sessionId": "session-id",
  "present": true
}
```

### POST /coaching/assessments
Create assessment (requires auth)
```json
{
  "childId": "child-id",
  "skill": "Throwing",
  "score": 8,
  "notes": "Good improvement"
}
```

### GET /coaching/assessments/:childId
Get child assessments

### POST /coaching/home-visits
Create home visit record (requires auth)
```json
{
  "childName": "Alex Johnson",
  "date": "2024-03-25T14:00:00Z",
  "notes": "Discussed progress with parents"
}
```

### GET /coaching/home-visits
Get coach's home visits (requires auth)

### GET /coaching/reports
Get coaching reports (requires auth)

## Gallery Management

### POST /gallery
Upload image
```json
{
  "imageUrl": "https://example.com/image.jpg",
  "title": "Tournament Photo",
  "description": "Action shot from finals",
  "isPinned": false
}
```

### GET /gallery
Get all images

### GET /gallery/:id
Get image by ID

### PATCH /gallery/:id/pin
Toggle pin status

### POST /gallery/face-tags
Create face tag
```json
{
  "galleryId": "gallery-id",
  "playerId": "player-id",
  "x": 0.2,
  "y": 0.3,
  "width": 0.15,
  "height": 0.2
}
```

### POST /gallery/detect-faces
Detect faces in image
```json
{
  "imageUrl": "https://example.com/image.jpg"
}
```

## Demo Credentials

- **Admin**: admin@yultimate.com / admin123
- **Coach**: coach@yultimate.com / coach123
- **Player**: player@yultimate.com / player123
- **Spectator**: spectator@yultimate.com / spectator123
import React from 'react'

export function Landing(props) {
  return (
      <h2>Landing page (public)</h2>
  )
}

export function Home() {
  return (
    <h2> Home page (private)</h2>
  )
}

export function DashboardPage() {
  return (
      <h2> Dashboard Page (private)</h2>
  )
}
export function Analytics() {
  return (
      <h2> Analytics Page (private, permission: 'analize')</h2>
  )
}
export function Admin() {
  return (
      <h2> Admin Page (private, permission: 'admin')</h2>
  )
}
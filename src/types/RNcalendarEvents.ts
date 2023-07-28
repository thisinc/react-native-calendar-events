/**
 * Platform specific attendee statuses returned by the native iOS and Android Calendar APIs.
 */
export enum AttendeeStatus {
  IOSAccepted = "Accepted",
  IOSCompleted = "Completed",
  IOSDeclined = "Declined",
  IOSDelegated = "Delegated",
  IOSInProcess = "InProcess",
  IOSPending = "Pending",
  IOSTentative = "Tentative",
  IOSUnknown = "Unknown",
  AndroidNone = 0,
  AndroidAccepted = 1,
  AndroidDeclined = 2,
  AndroidInvited = 3,
  AndroidTentative = 4,
}
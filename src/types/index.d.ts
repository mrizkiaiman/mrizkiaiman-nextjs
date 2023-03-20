import { NextRouter } from 'next/router'
import React, { Ref } from 'react'
import type { ReactNode } from 'react'
declare module 'react-curved-text'

export interface WithChildren {
  children: React.ReactNode
}

export interface LabelValue {
  label: string
  value: string
}

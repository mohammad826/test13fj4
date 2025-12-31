export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
  icon: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ImageEditorState {
  originalImage: string | null;
  generatedImage: string | null;
  prompt: string;
  loading: LoadingState;
  error: string | null;
}
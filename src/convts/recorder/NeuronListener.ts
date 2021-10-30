

export class NeuronListener {

    callback: (index: number, input: any) => void
    record: boolean = false
    lastUpdate: number = Date.now();
    result: {[_: string]: number[][]} = {}

    constructor(callback: (index: number, input: any) => void) {
      this.callback = callback
    }

    startRecording() {
        this.record = true
    }

    stopRecording() {
        this.record = false
    }

    recordNeurons(index: number, input: any) {
        if (this.record) {
            this.lastUpdate = Date.now();
            this.callback(index, input)
            this.result[`${index}`] = input
        }
    }
  }